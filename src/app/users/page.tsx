'use client'
import React, { useEffect, useState } from 'react'
import { getUsers } from '@/lib/api/users';
import { useRouter } from 'next/navigation';
interface User {
    id: number;
    username: string;
}

const page = () => {

    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        let isMounted = true // Prevent state updates if component unmounts

        const fetchUsers = async () => {
            try {
                setLoading(true)
                setError(null)
                const res = await getUsers()

                if (isMounted) {
                    setUsers(res.users || [])
                }
            } catch (err) {
                if (isMounted) {
                    if (err instanceof Error && err.message.includes('Unauthorized')) {
                        router.push('/login')
                    } else {
                        setError(err instanceof Error ? err.message : 'Failed to load users')
                    }
                }
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }

        fetchUsers()

        return () => {
            isMounted = false // Cleanup
        }
    }, [router])

    if (loading) return <div>Loading users...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div>
            <h1>Usuarios</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    )
}

export default page