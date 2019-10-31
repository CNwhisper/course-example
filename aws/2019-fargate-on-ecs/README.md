# Fargate On ECS workshop

* [Git](#git)
* [Docker](#docker)
* [AWS](#aws)
* [AWS Cloud9](#cloud9)
* [Example files](#files)
* [補充](#memo)
---

課前:為確保能完成workshop練習，請先在電腦安裝好相關軟體工具
---

<h2 id="git">Git</h2>
  - 請先在電腦安裝 Git CLI 或其他 Git Tools
  - 請先確保已會使用 git

<h2 id="docker">Docker</h2>

- 請確認電腦已安裝 docker engine
  - [mac os](https://docs.docker.com/docker-for-mac/install/)
  - [windows 10](https://docs.docker.com/docker-for-windows/install/)
    - 注意: 可能與 Virutal Box 不相容
  - 可直接在 AWS 開 Cloud 9，已內建 docker engine
- docker 環境確認
  ```
  $ docker info
  ```

<h2 id="aws">AWS</h2>

- 請確認已擁有 AWS 帳號，並且在 IAM 已 Create 一個擁有 Console Management 的 IAM User
- AWS Root Account 建議設定 billing alarm , 個人練習帳號，建議設定為 1 美元
- Root Account 或 IAM User 請一律設定 MFA ，確保帳號安全性
- 課堂中會用的電腦，請先安裝 AWS CLI
  - [mac os](https://docs.aws.amazon.com/zh_tw/cli/latest/userguide/install-macos.html)
  - [windows](https://docs.aws.amazon.com/zh_tw/cli/latest/userguide/install-windows.html)
- AWS CLI 環境確認
  ```
  $ aws --version
  ```

<h2 id="cloud9">AWS Cloud9</h2>

- 如 docker cli , aws cli, git 總是裝不起來，可直接在 [aws cloud9](https://aws.amazon.com/tw/cloud9/) 進行 lab 練習
- 請在課堂前，先確認已會開啟 cloud9
- cloud9 設定
  AWS Cloud9 > Preferences > AWS SETTINGS > 關閉「AWS managed temporary credentials 」

---

補充:
---

<h2 id="files">Example files</h2>

- [vpc](basic-vpc.yaml) : 基礎網路環境暨 ECR 用的 User 所需的 Cloudformation template
- [fargate.yaml](fargate.yaml) : 完整 fargate 的 Cloudformation template ，包含:
  - 基礎網路環境
  - fargate on ecs 所需要的 private link
  - ALB + Two targate group for Fargate
  - Ecs cluster
  - Fargate for ALB Root & context path(/apis)

<h2 id="memo">補充</h2>

- remove exited container
```
docker rm $(docker ps -f="status=exited" -aq)
docker rm $(docker ps -f="status=created" -aq)
```
- remove dangling images
```
docker rmi $(docker images -f="dangling=true" -q)
```