import './App.css';
import CircleButton from './CircleButton';
import ItemRow from "./ItemRow"

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <h3>Sizes:</h3>
            <CircleButton size="XS"/>
            <CircleButton size="S"/>
            <CircleButton size="M"/>
            <CircleButton size="ML"/>
            <CircleButton size="L"/>
            <CircleButton size="XL"/>
            <CircleButton size="XXL"/>
				    
            <button className="btn btn-default"><span className="glyphicon glyphicon-star"></span> Star </button>
            <button className="btn btn-default" id="talkBubble">932</button>
          </div>
          <div className="col-md-10">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h3>16 Product(s) found</h3>
                </div>
                <div className="col-md-offset-3 col-md-2">
                  <h3 className="text-center">Order by: </h3>
                </div>
                <div className="col-md-1 col-xs-offset-1">
                  <h3><select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </select></h3>
                </div>
              </div>
	        	</div>
            <div className="container">
              <ItemRow/>
              <ItemRow/>
              <ItemRow/>
              <ItemRow/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
