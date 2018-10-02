# AWS Tutor

- LAB 1 : [VPC + One Subnet + One EC2](lab1-vpc.yaml) 
  - 請先到 EC2 建立 KeyPair ，並把 permission 改為 400 ， ，該 KeyPair 名稱用來建立 EC2 打 Key 用途
  - 到 CloudFormation 用 [2018-lab1-vpc.yaml](lab1-vpc.yaml) 檔案，建立一個 Stack 
  - 到 CloudFormation Stack 的 Output 取得 PublicIP 或則到 EC2 裡查看
  - 連到該台主機
  ```bash
  $ chmod 400 xxxx-xxxx-xxx.pem
  $ ssh -i xxxx-xxxx-xxx.pem ec2-user@xxx.xxx.xxx.xxx
  
  # 連進去後，試試連線
  $ yum update
  $ ping 8.8.8.8
  $ curl https://www.google.com
  ```
  - 測試完畢，記得要刪掉 CloudFormation Stack