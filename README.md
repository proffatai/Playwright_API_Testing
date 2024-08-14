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
