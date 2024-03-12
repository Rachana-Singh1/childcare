import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './LiveParentCount.css';

const LiveParentCount = () => {
const [parentCount, setParentCount] = useState(0);

  useEffect(() => {
    const fetchParentCount = async () => {
      try {
        const snapshot = await firebase.firestore().collection('users').where('role', '==', 'parent').get();
        setParentCount(snapshot.size);
      } catch (error) {
        console.error('Error fetching parent count:', error);
      }
    };
    fetchParentCount();

  // Set up real-time listener for updates (optional)
    const unsubscribe = firebase.firestore().collection('users').where('role', '==', 'parent')
      .onSnapshot(snapshot => {
        setParentCount(snapshot.size);
      });

    // Unsubscribe from snapshot listener when component unmounts (optional)
    return () => unsubscribe();
  }, []);

  return (
    <div className="list-count">
                  <h2>Total Parent Count: {parentCount}</h2>
                <div className="count-item">
              </div>
              </div>
  );
};

export default LiveParentCount;
