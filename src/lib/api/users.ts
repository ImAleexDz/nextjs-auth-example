const API_BASE = '/api/users';

export async function getUsers() {
    const res = await fetch(API_BASE, {
        credentials: 'include'
    })
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
}