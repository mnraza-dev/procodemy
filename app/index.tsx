import React, { useEffect, useState } from 'react';
import * as SecureStore from "expo-secure-store";
import { Redirect } from 'expo-router';
import { ActivityIndicator } from 'react-native';

export default function Home() {
    const [loggedInUser, setLoggedInUser] = useState(false);
    const [loading, setLoading] = useState(true); // Initially loading

    useEffect(() => {
        const subscription = async () => {
            setLoading(true); // Set loading to true
            const token = await SecureStore.getItemAsync('accessToken');
            setLoggedInUser(!!token); // Set true if token exists
            setLoading(false); // Set loading to false
        };
        subscription();
    }, []);

    if (loading) {
        return <>
        <ActivityIndicator size={32} color={'green'}/>
        </>; 
    }


    return (
        <Redirect href={!loggedInUser ? "/(routes)/onboarding" : "/"} />
    );
}
