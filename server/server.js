const express = require("express");
const app = express();
const port = 8000;
const {faker} = require("@faker-js/faker");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const createUser = () => {
    user = {
        id: faker.database.mongodbObjectId(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return user;
}

const createCompany = () => {
    company = {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return company;
}

app.get("/api/user/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/company/new", (req, res) => {
    res.json(createCompany());
});

app.get("/api/company/user", (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
});

// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));