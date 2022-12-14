import './config/envconfig.js';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cors from 'cors';
import http from 'http';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.mjs';
import routes from './routes.js';
import { connectdb } from './config/connectdb.js';
import { User } from './models/User.js';
import { getUser } from './utils/authenticate.js';
import './auth/strategies/LocalStrategy.js';
import { typeDefs } from './schema/schema.js';
import { resolvers } from './resolvers/resolvers.js';

const startApolloServer = async (typeDefs, resolvers) => {
    const app = express();
    const httpServer = http.createServer(app);

    // Connect to database
    connectdb();

    // Middleware
    app.use(express.static('public'));
    app.use(cors({
        origin: [
        "http://localhost:3000",
        "https://blog-site1234.herokuapp.com",
        "https://blog-site-fign.onrender.com"
    ],
        credentials: true
    }));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cookieParser(process.env.COOKIE_SECRET));
    app.use(passport.initialize());
    app.use(graphqlUploadExpress());

    // Authentication routes
    routes(app, User);


    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true,
        context: async ({ req }) => {
            let token = req.headers?.authorization.replace(/bearer\s/i, "") || ""
            let user = await getUser(token)
            return { user }
        },
        cache: 'bounded',
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
    });

    await server.start({
        app,
        path: "/",
        cors: {
            origin: [
                "http://localhost:3000",
                "https://blog-site1234.herokuapp.com",
                "https://blog-site-fign.onrender.com"
            ],
            credentials: true
        },
    });

    server.applyMiddleware({ app });

    // Server listening
    const PORT = process.env.PORT || 4000;
    httpServer.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

    // Producition code
    if (process.env.NODE_ENV === "production") {
        // Set static folder
        app.use(express.static('client/build'))

        app.get("*", (req, res) => {
            res.sendFile(path.resolve(process.cwd(), 'client', 'build', 'index.html'))
        })
    }
}

startApolloServer(typeDefs, resolvers);

