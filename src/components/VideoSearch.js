
import React from 'react' ;


class VideoSearch extends React.Component{
    constructor (props){
        super (props);
        this.changeSearchTerm =this.changeSearchTerm.bind(this);
        this.submitSearchTerm =this.submitSearchTerm.bind(this);
        this.state={
            term: ""
        }
    }

    changeSearchTerm(e){
        console.log(e.target.value);
        this.setState({
            term: e.target.value
        })
    }

    submitSearchTerm(e){
        e.preventDefault();
        const {changeVideoDetails}= this.props;
        const {term} = this.state;
        changeVideoDetails(term);

    }

    render(){

        return (<div>Video Search:

            <form onSubmit={this.submitSearchTerm}>
                <input
                value={this.state.term}
                onChange={this.changeSearchTerm}
                />
               <button type="submit">Submit</button>
            
                </form>
    
     </div>);
        
    }
    
}
 export default VideoSearch;