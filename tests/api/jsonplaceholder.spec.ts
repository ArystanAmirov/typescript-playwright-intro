import { test, expect } from '@playwright/test'

interface Post {
    userId: number
    id: number
    title: string
    body: string
  }

test('should fetch a post and verify response', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1')
    expect(response.status()).toBe(200)
    const responseBody = await response.json() as Post
    expect(responseBody.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
})

test('should create a post and verify response', async ({ request}) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            "title": "My new post", 
            "body": "This is the content", 
            "userId": 1
        }
    })

    expect(response.status()).toBe(201)
    
    const responseBody = await response.json() as Post

    expect(responseBody.title).toBe('My new post')
    expect(responseBody.body).toBe('This is the content')
    expect(responseBody.userId).toBe(1)
    expect(responseBody.id).toBeGreaterThan(0)
} )

test('should update a post and verify response', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            "id": 1, 
            "title": "Updated post", 
            "body": "New content", 
            "userId": 1
        }
    })
    expect(response.status()).toBe(200)

    const responseBody = await response.json() as Post

    expect(responseBody.title).toBe('Updated post')
    expect(responseBody.body).toBe('New content')
    expect(responseBody.userId).toBe(1)
    expect(responseBody.id).toBe(1)
})

test('should delete a post and verify response', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1')
    expect(response.status()).toBe(200)

    const responseBody = await response.json()
    expect(responseBody).toEqual({})
})
