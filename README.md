<h1 style="text-align:center"> QuickStore </h1>

<p style="text-align:center">
QuickStore is a template codebase for small-scale shop owners to get their products accessible to a much larger audience in just few minutes. The shop-owner just needs to sign-up for the various free services that are used in the software and fill-out the form given below. And bammm.. as soon as the person clicks deploy my website button, He gets an admin panel ready to work with. Next he needs to fill out the Store form, to host his/ her store, which he can share with the customers to interact and make orders form. Apart from this, admin system allows users to plug in the API to their custom websites for flexibility in setup.
</br>
</br>
</p>
<p style="display:flex; flex-direction:row; justify-content:center; align-items:center">
<a target='_blank' href='quick-store-sigma.vercel.app' style='background:white; padding-left:1.5rem; padding-right:1.5rem; padding-top:0.5rem;padding-bottom:0.5rem; border-radius:0.25rem; font-weight:600; color:rgb(17, 24, 39);display:flex; flex-direction:row; justify-content:center; align-items:center; gap:8px'>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M72,160l24,24s-8,32-56,32C40,168,72,160,72,160Zm64-88H74.35a8,8,0,0,0-5.65,2.34L34.35,108.69a8,8,0,0,0,4.53,13.57L80,128Zm-8,104,5.74,41.12a8,8,0,0,0,13.57,4.53l34.35-34.35a8,8,0,0,0,2.34-5.65V120Z" opacity="0.2"></path><path d="M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.83-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM40,114.34l37.15,5.18L116.69,80H74.36ZM91.32,128,128,164.68l57.45-57.45a76.46,76.46,0,0,0,22.42-59.16,76.64,76.64,0,0,0-59.11,22.47ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z"></path>
</svg>  Launch My Site</a>
</p>

***
## For Devs →
## Tech-Stack

1. [NextJs](https://nextjs.org/)- Enables developers to create full-stack Web applications super-fast and deploy them much faster by optimizing builds.
2. [MySQL](https://www.mysql.com/)- A relational database organizinng in form of tables which data may be related to each other.
3. [Prisma](https://www.prisma.io/)- Acts as an Typescript ORM(Object-Relational Mapping), that talks to database and returns the data in typesafe manner.
4. [PlanetScale](https://planetscale.com/)- To host MySQL database online.
5. [Stripe](https://stripe.com/en-in)- To enable payments.

## Live Demo

- Admin Panel - [WareHouse](https://warehouse-admin.vercel.app/)
- Client Application - [WebStore](https://client-store.vercel.app/)

## Setup project on your system

### WareHouse System [Admin Panel]-

1. Clone the repository:

```shell
   git clone https://github.com/Hadeso-0/warehouse-admin.git
```

2. Install packages

```shell
  npm i
```

3. Setup environment variables:

```js
SHOP_NAME=
FRONTEND_STORE_URL=
DATABASE_URL=
STRIPE_API_KEY= 
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_PRESET_NAME=
NODE_ENV="development"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

4. Connect to PlanetScale and Push Prisma

```shell
   npx prisma generate
   npx prisma db push
```

5. Start the app

```shell
npm run dev
``` 
### Store System [Client Store]-

1. Clone the repository:

```shell
   git clone https://github.com/Hadeso-0/client-store.git
```

2. Install packages

```shell
  npm i
```

3. Setup environment variables:

```js
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_STORE_NAME=
NEXT_PUBLIC_STORE_DESC=
```

4. Start the app

```shell
npm run dev
``` 