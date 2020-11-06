<h3 align="center">
  Simple Jobs API built in Node.js and deployed on AWS
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/eltonlazzarin/nodejs-aws-deploy">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/eltonlazzarin/nodejs-aws-deploy">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/eltonlazzarin/nodejs-aws-deploy">

  <img alt="GitHub issues" src="https://img.shields.io/github/issues/eltonlazzarin/nodejs-aws-deploy">

  <img alt="GitHub" src="https://img.shields.io/github/license/eltonlazzarin/nodejs-aws-deploy">
</p>

<p align="center">
  <a href="#-about-the-project">About The Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-backend-technologies">Backend Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-backend-getting-started">Backend Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute-backend">How To Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-backend-license">Backend License</a>
</p>

## 👨🏻‍💻 About the project

<p>
This project consists of a simple API that shows some fictional jobs, but the main purpose was to create it to deploy to AWS for learning purposes with the cloud platform, where an EC2 instance was created and an application was uploaded Node.js which is the API itself within a Docker image and finally expose this API on the internet publicly.</p>

## 🚀 Backend Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en)
- [Express](https://github.com/expressjs/express)
- [VS Code](https://code.visualstudio.com) with [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) and [Prettier RC](https://github.com/prettier/prettier)

## 💻 Backend getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Docker CLI](https://docs.docker.com/engine/reference/commandline/cli)
- [Docker-Compose CLI](https://docs.docker.com/compose/reference/overview)
- [Docker-Machine CLI](https://docs.docker.com/machine/install-machine)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- [AWS Free Account](https://aws.amazon.com/free/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/eltonlazzarin/nodejs-aws-deploy.git

$ cd nodejs-aws-deploy
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn
```

## 💻 Run API Locally

**Creating Docker environment with Node.js**

```bash
# Create docker enviroment
$ docker-compose up
```

**Run the API**

```bash
# Run the API
$ yarn start
```

**Acccess the API**

http://localhost:3000

## 💻 Deploy API on AWS

**Generating AWS account permissions**

```bash
$ aws configure

# AWS Console -> AWS User -> My Security Credentials -> AWS IAM credential and click Create access key button and then copy Access key ID and paste bellow
AWS Access Key ID [***************CTPA]:
```

**Create an EC2 instance on AWS**

```bash
$ docker-machine create --driver amazonec2 NOME_DA_INSTANCIA
```

**Connect the terminal to EC2 instance**

```bash
$ eval $(docker-machine env INSTANCE_NAME)
```

**Create docker image in EC2 instance**

```bash
$ docker-compose up -d
```

**Disconnect terminal to EC2 instance**

```bash
$ eval $(docker-machine env INSTANCE_NAME -u)
```

## 🤔 How to contribute backend

**Follow the steps below**

```bash
# Clone your fork
$ git clone https://github.com/eltonlazzarin/nodejs-aws-deploy.git

$ cd nodejs-aws-deploy

# Create a branch with your feature
$ git checkout -b your-feature

# Make the commit with your changes
$ git commit -m 'feat: Your new feature'

# Send the code to your remote branch
$ git push origin your-feature
```

After your pull request is merged, you can delete your branch

## 📝 Backend License

This project is under the MIT license. See the [LICENSE](https://github.com/eltonlazzarin/nodejs-aws-deploy/blob/master/LICENSE) for more information.

---

Made with ♥ by Elton Lazzarin :wave: [Get in touch!](https://www.linkedin.com/in/eltonlazzarin/)
