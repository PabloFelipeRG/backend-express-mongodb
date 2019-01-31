const mockGet = (req, res) => {
    user = {
        id: 123,
        name: "Pablo",
        age: 21,
        hobbies: [
            "Gaming",
            "Programming",
            "Workingout"
        ]
    };

    res.json(user);
};

module.exports = {
    mockGet
}