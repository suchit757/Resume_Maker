import React from 'react';
import "../App.scss";
import { IObejctVlaue } from "../interface";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export interface IOutResumeState {
  isModal: boolean;
  ObejctVlaueArray: Array<IObejctVlaue>
}
export default class OutResume extends React.Component {
  state: IOutResumeState = {
    isModal: false,
    ObejctVlaueArray: [],
  }
  componentDidMount() {
    const x = JSON.parse( localStorage.getItem( 'resume-data' ) || '{}' );
    if(x === ""){
      ( this.props as any ).history.push( "/" );
    }
    this.setState( { ObejctVlaueArray: x } )
  }

  Cancel() {
    localStorage.setItem( "resume-data", JSON.stringify( "" ) );
    ( this.props as any ).history.push( "/" );
  }

  downloadform = (e: any) => {
    const input = document.getElementById( "rootItemsDownload" )!
    const data = this.state.ObejctVlaueArray.map((v: IObejctVlaue) => {return v.name})
    html2canvas(input)
        .then((canvas: any) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'px', 'a4');
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
            pdf.save(`${data}_resume.pdf`);
        });
        toast.success(`${data} Resume download successFully`)
  }

  render() {
    return (
      <div style={{backgroundColor:"white"}}>
          <ToastContainer hideProgressBar={false} />
          {this.state.ObejctVlaueArray.map( ( data: IObejctVlaue, index ) => {
            return (
              <div className="col-xl-5 offset-xl-3 block-Output" id= "rootItemsDownload" key={index}>
                <div className="heading">Resume</div>

                <div className="text-heading">Enter Name:-</div>
                <input disabled style={{ marginRight: "160px" }} className="input-css-output" type="text" defaultValue={data.name} />

                <div className="text-heading">Birthdate:-</div>
                <input disabled style={{ marginRight: "140px" }} className="input-css-output" type="text" defaultValue={data.birthdate} />

                <div className="text-heading">Email id:-</div>
                <input disabled style={{ marginRight: "130px" }} className="input-css-output" type="text" defaultValue={data.emailId} />

                <div className="text-heading">About:-</div>
                <textarea disabled style={{ marginRight: "120px", paddingRight: "80px", resize: "none", height: "80px" }} className="input-css-output" defaultValue={data.about} />

                <hr/>
                <div style={{ margin: "10px 0px -5px -57%", fontWeight: "bolder" }}>Experience:-</div>
                <div className="border-box-output">
                  <div className="text-heading">Comapny Name:-</div>
                  <input disabled style={{ marginRight: "105px" }} className="input-css-output" type="text" defaultValue={data.experience[0].companyName} />

                  <div className="text-heading">Job Post:-</div>
                  <input disabled style={{ marginRight: "55px" }} className="input-css-output" type="text" defaultValue={data.experience[0].jobPost} />

                  <div className="text-heading">Description:-</div>
                  <input disabled style={{ marginRight: "76px" }} className="input-css-output" type="text" defaultValue={data.experience[0].description} />

                  <div className="text-heading">isCurrent:-</div>
                  <input disabled style={{ marginRight: "60px" }} className="input-css-output" type="text" defaultValue={`${data.experience[0].inCurrent === false ? "No" : "Yes"}`} />

                  <div className="text-heading">form-to:-</div>
                  <input disabled style={{ marginRight: "50px" }} className="input-css-output" type="text" defaultValue={data.experience[0].FormTo} />

                </div>

                <hr/>
                <div style={{ margin: "10px 0px -5px -60%", fontWeight: "bolder" }}>Eduction:-</div>
                <div className="border-box-output">
                  <div className="text-heading">Name:-</div>
                  <input disabled style={{ marginRight: "105px" }} className="input-css-output" type="text" defaultValue={data.education[0].name} />

                  <div className="text-heading">Location:-</div>
                  <input disabled style={{ marginRight: "125px" }} className="input-css-output" type="text" defaultValue={data.education[0].location} />

                  <div className="text-heading">About:-</div>
                  <textarea disabled style={{ marginRight: "115px", paddingRight: "80px", resize: "none", height: "80px" }} className="input-css-output" defaultValue={data.education[0].about} />

                  <div className="text-heading">form-to:-</div>
                  <input disabled style={{ marginRight: "120px" }} className="input-css-output" type="text" defaultValue={data.education[0].formTo} />

                </div>
                <hr/>
                <div className="text-heading" style={{ marginTop: "25px" }}>Skill:-</div>
                <div style={{ padding: "0px 120px 0px 196px" }} className="input-css-output">
                <textarea disabled style={{ marginRight: "115px", paddingRight: "80px", resize: "none", height: "80px" }} className="input-css-output" defaultValue={data.skill[0].value} />
                </div>

                <div className="text-heading" style={{ marginTop: "25px" }}>Language:-</div>
                <div style={{ padding: "0px 120px 0px 196px" }} className="input-css-output">
                <textarea disabled style={{ marginRight: "115px", paddingRight: "80px", resize: "none", height: "80px" }} className="input-css-output" defaultValue={data.language[0].value} />
                </div>


                <hr/>
                <div style={{ margin: "10px 0px -5px -60%", fontWeight: "bolder" }}>project:-</div>
                <div className="border-box-output">
                  <div className="text-heading">Name:-</div>
                  <input disabled style={{ marginRight: "74px" }} className="input-css-output" type="text" defaultValue={data.project[0].name} />

                  <div className="text-heading">Description:-</div>
                  <textarea disabled style={{ marginRight: "120px", paddingRight: "80px", resize: "none", height: "80px" }} className="input-css-output" defaultValue={data.project[0].description} />

                  <div className="text-heading">Project Role:-</div>
                  <input disabled style={{ marginRight: "115px" }} className="input-css-output" type="text" defaultValue={data.project[0].projectRol} />

                </div>
              </div>
            );
          } )}
            <button style={{ color: "black", float: "left", cursor: "pointer", marginTop: "-33px", marginLeft: "37%" }} onClick={() => this.Cancel()}>Create more Resume</button>
            <button style={{ float: "left", marginTop: "-33px", marginLeft: "47%", marginBottom:"70px" }} onClick={(e) => { this.downloadform(e) }}>Download Resume</button>
      </div>
    )
  }
}
