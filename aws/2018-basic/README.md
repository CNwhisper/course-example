# AWS Tutor

- LAB 1 : [VPC + One Subnet + One EC2](lab1-vpc.yaml) 
  - 請先到 EC2 建立 KeyPair ，並把 permission 改為 400 ， ，該 KeyPair 名稱用來建立 EC2 打 Key 用途
  - 到 CloudFormation 用 [lab1-vpc.yaml](lab1-vpc.yaml) 檔案，建立一個 Stack 
  - 到 CloudFormation Stack 的 Output 取得 PublicIP 或則到 EC2 裡查看
  - 連到該台主機
  ```bash
  $ chmod 400 xxxx-xxxx-xxx.pem
  $ ssh -i xxxx-xxxx-xxx.pem ec2-user@xxx.xxx.xxx.xxx
  
  # 連進去後，試試連線
  $ sudo yum update -y
  $ ping 8.8.8.8
  $ curl https://www.google.com
  ```
  - 測試完畢，記得要刪掉 CloudFormation Stack
  
  
  
- LAB 1 : [VPC + Two Subnet(public/private) + Two EC2(Bastion/private EC2)](lab2-vpc-2subnet.yaml) 
  - 請先到 EC2 建立 KeyPair ，並把 permission 改為 400 ， ，該 KeyPair 名稱用來建立 EC2 打 Key 用途
  - 到 CloudFormation 用 [lab2-vpc-2subnet.yaml](lab2-vpc-2subnet.yaml) 檔案，建立一個 Stack 
  - 到 CloudFormation Stack 的 Output 取得 PublicIP 或則到 EC2 裡查看
  - 連到該台主機
  ```bash
  $ chmod 400 xxxx-xxxx-xxx.pem
  $ ssh -i xxxx-xxxx-xxx.pem ec2-user@xxx.xxx.xxx.xxx
  
  # 連進去後，試試連線
  $ sudo yum update -y
  $ ping 8.8.8.8
  $ curl https://www.google.com
  ```
  - 進到 bastion 後，一樣到 CloudFormation Stack 的 Output 取得 Private  或則到 EC2 裡查看，用相同方式，連到第二台，並進行連線測試
    - 記得要把 key 傳到第一台裡，才能用該把 key 連到第二台
  
  - 測試完畢，記得要刪掉 CloudFormation Stack  