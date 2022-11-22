import React from 'react';
import '@imports/rxjs'
import { AppProps } from 'next/app';
import '../assets/styles/global.css'
import "@assets/styles/AllTasks.css"
import "@assets/styles/FormBuilder.css"
import {AppLayout} from "../components/AppLayout/AppLayout";
import { wrapper } from "../store/store";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
    <AppLayout>
        <div className="app">
            <Component {...pageProps} />
        </div>
    </AppLayout>
);

export default wrapper.withRedux(App);
