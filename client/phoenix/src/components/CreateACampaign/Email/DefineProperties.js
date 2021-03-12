import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Row,Col, Schema, Content, Container, Button, Form, FormGroup, ControlLabel, FormControl, SelectPicker} from 'rsuite';


class DefineProperties extends Component {
constructor(props)
{
  super(props);
  this.state = {
    
    formValue: {
      methodEmail:"Template",
      emailName: '',
      subject:"",
      preheader:"",
      description:"",
      formStatus:"false"
      },
    formError: {}
  };
  this.props.setClick(this.setInput);
  this.setInput =this.setInput.bind(this);
  // this.handleSubmit =this.handleSubmit.bind(this);
}

setInput() {
  document.getElementById("submitbutton").click();
  // if(this.props.formValues.emailName !== "" && this.props.formValues.subject !== "" && this.props.formValues.preheader !=="" && this.props.formValues.description !==""  && this.props.formValues.methodEmail !=="" )
  // {
  //  this.props.parentMethod()
  // }

// d

 
}

// handleSubmit() {
  
//   // if (this.form.check()) {
//   //  this.props.dispatch(({
//   //     type: "SET_INPUT_CHECK",
//   //     payload : true 
//   //  })) 
//   // }
//   // else
//   // {
    
//   // }
// }


    render() {
      var data = [
        {
          "label": "Template",
          "value": "Template",
          "role": "Template"
        },
        {
          "label": "Scratch",
          "value": "Scratch",
          "role": "Scratch"
        }
      ]
      const {formValue} = this.state;
        const { StringType } = Schema.Types;
        const model = Schema.Model({
          emailName: StringType().isRequired('This field is required.'),
          subject: StringType().isRequired('This field is required.'),
          preheader: StringType().isRequired('This field is required.'),
          description: StringType().isRequired('This field is required.')
           /*Email validation */
  
          
        });
      
        return (<>
<Container className="ContainerEmailCreate">

<Content>
<Row style={{background: "#ffffff", padding: 20, paddingBottom:5, border: "1px solid #d9d9d9", borderTop: "none"}}>
<Col md={7}></Col>

<Col md={10} style={{marginTop:30}}>

          <Form  fluid model={model}ref={ref => (this.form = ref)}
          onChange={formValue => {
            this.setState({ formValue }, () =>
            this.props.dispatch({
              type: "SET_EMAIL_PROPERTIES",
              payload: formValue
            }));


          }}
          onCheck={formError => {
            this.setState({ formError });
          }}
          formValue={formValue}>
<FormGroup>
                  <ControlLabel className="enter-a-valid-email"><span style={{fontWeight: 100}}>Create Email From</span> </ControlLabel>




<FormControl
    accepter={SelectPicker}
    data={data}
    searchable={false}
    style={{ width: "100%" }}
    name="methodEmail"
    defaultValue = {this.state.method}

  />


                </FormGroup>
                <FormGroup>
                  <ControlLabel className="enter-a-valid-email"><span style={{fontWeight: 100}}>Email Name</span> </ControlLabel>
                  <FormControl name="emailName" type="text" className="newfields"/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel className="enter-a-valid-email"><span style={{fontWeight: 100}}>Subject Line</span> </ControlLabel>
                  <FormControl name="subject" type="text" className="newfields"/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel className="enter-a-valid-email"><span style={{fontWeight: 100}}>Preheader</span> </ControlLabel>
                  <FormControl name="preheader" type="text" className="newfields"/>
                </FormGroup>
                
                <FormGroup>
                  <ControlLabel className="enter-a-valid-email"><span style={{fontWeight: 100}}>Description</span> </ControlLabel>
                  <FormControl name="description" componentClass="textarea" className="descriptionBox" rows={3}/>
                </FormGroup>
               
               
              <Button type="submit" style={{display:'none'}} onClick={this.handleSubmit} id="submitbutton">Hello</Button>
             
                </Form> 
</Col>

                
</Row>

<Col md={7}>
</Col>

</Content>

</Container> 
           </>
        )
    }
}
function mapStateToProps(state) {

  const { formValues } = state.emailPropertiesreducer;
  return {
    formValues
    
  }
}
export default connect(mapStateToProps)(DefineProperties) 