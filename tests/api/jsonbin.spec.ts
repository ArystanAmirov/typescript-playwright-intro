// import { test, request, expect } from "@playwright/test";

// const binID = '67eb55b68a456b7966804e4a'
// const xMasterKey = '$2a$10$o2ViSV01ahx6usH8gnlZzOVgm3ShgXxPBh1S44viYZZmIN2OTQdlu'

// test('should create a bin and verify response', async ({ request }) => {
//     const response = await request.post('https://api.jsonbin.io/v3/b', {
//         headers: {
//             "X-Master-Key": xMasterKey
//         },
//         data: {
//             "name": "My test bin"
//         }
//     })
//     expect(response.status()).toBe(200)

//     const responsebody = await response.json()

//     console.log(responsebody.metadata.id)
// })

// test('should update a bin with new data', async ({ request }) => {
//     const response = await request.put(`https://api.jsonbin.io/v3/b/${binID}`, {
//         headers: {
//             "X-Master-Key": xMasterKey
//         },
//         data: {
//             "name": "My test bin", 
//             "value": 42, 
//             "active": true
//         }
//     })

//     expect(response.status()).toBe(200)

//     const responsebody = await response.json()

//     expect(responsebody).toEqual({"metadata": {"parentId": "67eb55b68a456b7966804e4a", "private": true}, "record": {"active": true, "name": "My test bin", "value": 42}})

// })
