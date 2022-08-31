import './config/envconfig.js';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cors from 'cors';
import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'; 
import routes from './routes.js';
import { connectdb } from './config/connectdb.js';
import { User } from './models/User.js';
import './auth/strategies/LocalStrategy.js';
import { typeDefs } from './schema/schema.js';
import { resolvers } from './resolvers/resolvers.js';

const startApolloServer = async (typeDefs, resolvers) => {
    const app = express(); 
    const httpServer = http.createServer(app); 

    // Connect to database
    connectdb();

    // Middleware 
    app.use(cors({
        origin: ["http://localhost:3000"],
        credentials: true
    })); 
    app.use(bodyParser.urlencoded({ extended: false })); 
    app.use(bodyParser.json());
    app.use(cookieParser(process.env.COOKIE_SECRET)); 
    app.use(passport.initialize()); 

    // Authentication routes 
    routes(app, User); 

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true,
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
            origin: ["http://localhost:3000"],
            credentials: true
        }, 
    }); 

    server.applyMiddleware({ app }); 

    // Server listening
    const PORT = process.env.PORT | 4000; 
    httpServer.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)); 
}

startApolloServer(typeDefs, resolvers); 
