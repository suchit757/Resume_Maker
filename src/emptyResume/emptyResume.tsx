import React, { Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default class EmptyResume extends Component {

    downloadform = ( e: any ) => {
        const input = document.getElementById( "rootItemsDownload" )!
        const data = "Templete"
        html2canvas( input )
            .then( ( canvas: any ) => {
                const imgData = canvas.toDataURL( 'image/png' );
                const pdf = new jsPDF( 'p', 'px', 'a4' );
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage( imgData, 'JPEG', 0, 0, width, height );
                pdf.save( `${data}_resume.pdf` );
            } );
        toast.success( `${data} Resume download successFully` )
    }

    Cancel() {
        localStorage.setItem( "resume-data", JSON.stringify( "" ) );
        ( this.props as any ).history.push( "/" );
    }

    render() {
        return (
            <div style={{ backgroundColor: "white" }}>
                <ToastContainer hideProgressBar={false} />
                <div className="col-xl-5 offset-xl-3 block-Output" id="rootItemsDownload">
                    <div className="heading">Resume Templete</div>

                    <div className="text-heading">Enter Name:-</div>
                    <input disabled style={{ marginRight: "160px" }} className="input-css-output" type="text" defaultValue={""} />

                    <div className="text-heading">Birthdate:-</div>
                    <input disabled style={{ marginRight: "140px" }} className="input-css-output" type="text" defaultValue={""} />

                    <div className="text-heading">Email id:-</div>
                    <input disabled style={{ marginRight: "130px" }} className="input-css-output" type="text" defaultValue={""} />

                    <div className="text-heading">About:-</div>
                    <textarea disabled style={{ marginRight: "120px", paddingRight: "80px", resize: "none", height: "80px" }} className="input-css-output" defaultValue={""} />

                    <hr />
                    <div style={{ margin: "10px 0px -5px -57%", fontWeight: "bolder" }}>Experience:-</div>
                    <div className="border-box-output">
                        <div className="text-heading">Comapny Name:-</div>
                        <input disabled style={{ marginRight: "105px" }} className="input-css-output" type="text" defaultValue={""} />

                        <div className="text-heading">Job Post:-</div>
                        <input disabled style={{ marginRight: "55px" }} className="input-css-output" type="text" defaultValue={""} />

                        <div className="text-heading">Description:-</div>
                        <input disabled style={{ marginRight: "76px" }} className="input-css-output" type="text" defaultValue={""} />

                        <div className="text-heading">isCurrent:-</div>
                        <input disabled style={{ marginRight: "60px" }} className="input-css-output" type="text" defaultValue={""} />

                        <div className="text-heading">form-to:-</div>
                        <input disabled style={{ marginRight: "50px" }} className="input-css-output" type="text" defaultValue={""} />

                    </div>

                    <hr />
                    <div style={{ margin: "10px 0px -5px -60%", fontWeight: "bolder" }}>Eduction:-</div>
                    <div className="border-box-output">
                        <div className="text-heading">Name:-</div>
                        <input disabled style={{ marginRight: "105px" }} className="input-css-output" type="text" defaultValue={""} />

                        <div className="text-heading">Location:-</div>
                        <input disabled style={{ marginRight: "125px" }} className="input-css-output" type="text" defaultValue={""} />

                        <div className="text-heading">About:-</div>
                        <textarea disabled style={{ marginRight: "115px", paddingRight: "80px", resize: "none", height: "80px" }} className="input-css-output" defaultValue={""} />

                        <div className="text-heading">form-to:-</div>
                        <input disabled style={{ marginRight: "120px" }} className="input-css-output" type="text" defaultValue={""} />

                    </div>
                    <hr />
                    <div className="text-heading" style={{ marginTop: "25px" }}>Skill:-</div>
                    <div style={{ padding: "0px 120px 0px 196px" }} className="input-css-output">
                        <textarea disabled style={{ marginRight: "115px", paddingRight: "80px", resize: "none", height: "80px" }} className="input-css-output" defaultValue={""} />
                    </div>

                    <div className="text-heading" style={{ marginTop: "25px" }}>Language:-</div>
                    <div style={{ padding: "0px 120px 0px 196px" }} className="input-css-output">
                        <textarea disabled style={{ marginRight: "115px", paddingRight: "80px", resize: "none", height: "80px" }} className="input-css-output" defaultValue={""} />
                    </div>


                    <hr />
                    <div style={{ margin: "10px 0px -5px -60%", fontWeight: "bolder" }}>project:-</div>
                    <div className="border-box-output">
                        <div className="text-heading">Name:-</div>
                        <input disabled style={{ marginRight: "74px" }} className="input-css-output" type="text" defaultValue={""} />

                        <div className="text-heading">Description:-</div>
                        <textarea disabled style={{ marginRight: "120px", paddingRight: "80px", resize: "none", height: "80px" }} className="input-css-output" defaultValue={""} />

                        <div className="text-heading">Project Role:-</div>
                        <input disabled style={{ marginRight: "115px" }} className="input-css-output" type="text" defaultValue={""} />

                    </div>
                </div>
                <button style={{ color: "black", float: "left", cursor: "pointer", marginTop: "-33px", marginLeft: "37%" }} onClick={() => this.Cancel()}>Create more Resume</button>
                <button style={{ float: "left", marginTop: "-33px", marginLeft: "47%", marginBottom: "70px" }} onClick={( e ) => { this.downloadform( e ) }}>Download Resume</button>
            </div>
        )
    }
}
