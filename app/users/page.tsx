'use client'
import { signOut } from 'next-auth/react';
import EmptyState from '../components/EmptyState';

const Users = () => {
    return (
        <div className="" onClick={() => signOut()}>
           <EmptyState/>
        </div>
    );
}
export default Users;