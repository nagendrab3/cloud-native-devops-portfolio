# Cloud-Native DevOps Portfolio Website 

## Project Overview

This is my personal portfolio website created to showcase my experience as a Cloud-Native / DevOps Engineer.

The website is developed using HTML, CSS, and JavaScript and deployed on an AWS EC2 instance using Nginx web server.



## Live Website

http://ip address



## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Font Awesome Icons


### Cloud & DevOps

- AWS EC2
- Ubuntu Linux
- Nginx Web Server
- Git
- GitHub




## Project Architecture


Developer
    |
    |
Local Website Files
    |
    |
Git Commit
    |
    |
GitHub Repository
    |
    |
AWS EC2 Instance
    |
    |
Nginx Web Server
    |
    |
Live Website


---

## Project Structure


portfolio-website

|
|-- index.html
|       Website structure
|
|-- style.css
|       Website design and styling
|
|-- script.js
|       Website interactions
|
|-- resume.pdf
|       Resume document
|
|-- README.md
        Project documentation




## Deployment Process


1. Created AWS EC2 Ubuntu Instance

2. Installed Nginx Web Server


Commands:

sudo apt update

sudo apt install nginx -y


3. Copied website files to Nginx directory


sudo cp -r portfolio-website/* /var/www/html/


4. Restarted Nginx


sudo systemctl restart nginx


5. Accessed website using EC2 public IP


http://<EC2-PUBLIC-IP>




## Skills Demonstrated

- Linux Administration
- AWS EC2 Deployment
- Nginx Configuration
- Git Version Control
- GitHub Repository Management
- HTML/CSS/JavaScript Development




## Future Enhancements

- GitHub Actions CI/CD Pipeline
- Automated Deployment
- Docker Containerization
- Kubernetes Deployment
- Terraform AWS Infrastructure
- HTTPS SSL Configuration




## About Me

Name:
Nagendra Babu Alapati


Role:
Cloud-Native / DevOps Engineer


Experience:

- Kubernetes-based Telecom CNF Deployments
- 4G/5G Core Network Platforms
- Linux Administration
- Cloud Native Technologies


Certifications:

- KCNA
- Linux Foundation Training
- Nokia Cloud Native Certifications




## Contact

GitHub:

https://github.com/nagendrab3


LinkedIn:

https://linkedin.com/in/nagendrababualapati


Email:

nagendraalapati@gmail.com




Thank you for visiting my portfolio 
