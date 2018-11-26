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
  

- LAB 2-1 : [S3(CLI)](lab2-1-s3.yaml) 
  - 到 CloudFormation 用 [lab2-1-s3.yaml](lab2-1-s3.yaml)檔案，建立一個 stack , 並記住 bucket name 
  - 到 CloudFormation Stack 的 Output 取得 Access Key 及 Access Secret Key 
  - 將 Access Key 與 Access Secret Key 設定到 AWS CLI 裡
  - 透過 AWS CLI 指令，進行 S3 檔案操作
  
    ```bash
    $ echo 'this is a log file' >> my.log
    $ aws s3 cp my.log s3://BUCKET
    $ aws s3 ls s3://BUCKET
    ```
    
  - 測試完畢，記得要刪掉 CloudFormation Stack

  
- LAB 2-2 : [VPC + Two Subnet(public/private) + Two EC2(Bastion/private EC2)](lab2-2-vpc-2subnet.yaml) 
  - 請先到 EC2 建立 KeyPair ，並把 permission 改為 400 ， ，該 KeyPair 名稱用來建立 EC2 打 Key 用途
  - 到 CloudFormation 用 [lab2-vpc-2subnet.yaml](lab2-2-vpc-2subnet.yaml) 檔案，建立一個 Stack 
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
  
 
- LAB 3-2: [VPC + Four Subnet(public/private, multi A-Z+ NLB+ASG+ Bastion)](lab3-2-vpc-4subnet-NLB-Asg.yaml)
  - 到 Launch EC2 Instance，找到最新的 AMI Linux2 的 AMI-ID
  - 到 EC2 產生 keyPair
  - 到 CloudFormation 用 [lab3-2-vpc-4subnet-NLB-Asg.yaml](lab3-2-vpc-4subnet-NLB-Asg.yaml) 檔案，建立一個 Stack
  - 到 CloudFormation 的 Output 或 ELB 頁簽，找到 ELB DNS 
  - 透過 ELB DNS 連到 EC2
  - 測試完畢，記得要刪掉 CloudFormation Stack
   
   
- LAB 4 : [CI/CD](lab4-codedeploy.yaml)
  - 基礎 infrastructure 同 [3-2](lab3-2-vpc-4subnet-NLB-Asg.yaml) 
  - 到 CloudFormation 建 Stack，並從 Output 將 CodeDeploy Application 及 DeploymentGroup 名字放到 Git 專案
  - 另在 CI 專案撰寫相關打包、驗證策略，Git 專案，可參考 https://github.com/noahxp/codedeploy
  - 測試完畢，記得要刪掉 CloudFormation Stack