async function query(data) {
    const response = await fetch(
        "http://localhost:3000/api/v1/prediction/467a9bb6-9bf1-4a48-9bb8-1dc8a1790dde",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

query({"question": "Hey, how are you?"}).then((response) => {
    console.log(response);
});