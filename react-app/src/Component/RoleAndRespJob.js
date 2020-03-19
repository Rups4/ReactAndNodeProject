import React from 'react';
import Modal from 'react-responsive-modal';


class RoleAndRespJob extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
           // open:false
        };

    }

    componentDidMount(){
 /*  this.setState({
    open:this.props.open
  },()=>{console.log("props value",this.props.open+" state value",this.state.open)})
 */
    }
    

    render(){
       
        if(this.props.id==1){
        return(
             <Modal open={this.props.open} onClose={this.props.closeModel}>
           <div className="card">
               <div className="card-header">Roles and Responsibilities</div>
                <ul>
                   <li>Configure the Jenkins CI/CD pipeline to build Java, Angular code and deploy the same to
docker containers.</li>
<li>Create parameterized Jenkins builds.</li>
<li>CManage Jenkins credentials, plugins.</li>
<li>Write Dockerfiles, docker-compose files for service deployment.</li>
<li>Manage Docker containers and volumes.</li>
<li>Configure Docker private registry, build, push and maintain docker images.</li>
<li>Write Terraform templates for Cloud resource provisioning..</li>
<li> Maintain Terraform state files using workspaces, backends.</li>
<li>Configure Terraform providers and provisioners like local-exec, remote-exec etc.</li>
<li>Create Terraform Modules.</li>
<li>Configure Hashicorp Vault and add, manage secrets.</li>
<li>Provision and configure the AWS resources using AWS CLI.</li>
    <li>Write bash script to automate the application configuration and deployment.</li>
    <li>Configure HAProxy and TLS certificates.</li>
    <li>Configuration management using Ansible playbooks.</li>
    <li>Write bash scripts to automate the routine tasks like AWS AMI creation/deletion, instance
start/stop, Database backup and restore etc.</li>
    <li>Troubleshoot issues with Linux memory, CPU, storage and network.</li>
    <li>Work closely with Dev team for requirement gathering and infrastructure provisioning.</li>
    <li>Create JIRA Sprints, user stories and assign tasks.</li>
     <li>conduct follow-up meetings to track the daily progress</li>
               </ul>
           </div>
          </Modal>


        );
    } else if(this.props.id==2){
        return(
            <Modal open={this.props.open} onClose={this.props.closeModel}>
            <div className="card">
                <div className="card-header">Roles and Responsibilities</div>
                 <ul>
                       <li>Configure GitLab and create Webhooks to trigger Jenkins builds.</li>
 <li>Create Dockerfile, launch containers and manage volumes.</li>
 <li>Create Jenkins CI/CD pipeline using Jenkinsfile.</li>
 <li>Launch and configure the stack of AWS and GCP resources using Terraform or AWS
CloudFormation templates.</li>
 <li>Workflow orchestration using GCP Cloud Composer (Apache Airflow).</li>
 <li>Configure EC2 instances, Launch Templates, EBS volumes, AMI, Snapshots, Route53.</li>
 <li>Configure S3 authorization for EMRFS using EMR security configurations.</li>
 <li> EMR cluster health monitoring and Performance tuning.</li>
 <li>AWS resource monitoring and auditing using CloudWatch and CloudTrail.</li>
 <li>Applying best practices like CIS Benchmark for AWS account security</li>
 
                </ul>
            </div>
           </Modal>

        );

        }else /* if(this.props.id==3) */{
            return(
                <Modal open={this.props.open} onClose={this.props.closeModel}>
                <div className="card">
                    <div className="card-header">Roles and Responsibilities</div>
                     <ul>
                        <li>Launch EC2 instances and manage EBS volumes, snapshots, AMI, Launch templates</li>
     <li>Create IAM users, roles, groups and policies to provide secure access to AWS resources.</li>
     <li>Configure VPC, RDS, load balancers, Route 53, Auto Scaling.</li>
     <li>Create S3 bucket, define the lifecycle policies, object restoration, manage and grant the
appropriate permissions to S3 bucket using IAM policies.</li>
     <li>Configure Hadoop cluster using Cloudera and Hortonworks distributions, install and manage
Hadoop ecosystem components.</li>
     <li>Provision Windows and Linux Virtual Machines on VMware ESXi.</li>
     <li>Configure the Zabbix monitoring tool.</li>
     <li>Configure of ADDC, WSUS, WDS, DNS, DHCP and File servers.</li>
     <li>User Accounts creation and administration in Active Directory.</li>
     <li>Draft and maintain ISMS audit documents and IT SOPs.</li>        
                    </ul>
                </div>
               </Modal>
            );

        }
    }
}


export default RoleAndRespJob;