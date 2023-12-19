This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install Docker if you don't have it already.

Next, create a `.env` file in the root project directory that has the following contents:

```
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=todo
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```

Next, spin up the development environment. From the root project directory run the following command:

```bash
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
