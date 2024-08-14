import {expect, test,request} from '@playwright/test';

test('Get request', async({request})=>{

    const response = await request.get('https://reqres.in/api/users?page=1');
    expect(response.status()).toBe(200);
   
    const responseBody = await response.json();
    expect(responseBody.page).toBe(1);
    expect(responseBody.data[0].first_name).toContain("George");
    console.log(response.status());
})

test('POST request', async({request})=>{
    let body={
        "name": "morpheus",
        "job": "leader"
    }
    const response = await request.post('https://reqres.in/api/users', {data:body });
    expect(response.ok()).toBeTruthy();
   
    const responseBody = await response.json();
    expect(responseBody.name).toBe("morpheus");
    expect(responseBody.job).toContain("leader");

    console.log(responseBody);
})

