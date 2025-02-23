import responseGen from "../Services/service.js";



const codeReviwer = async(req, res)=>{
    try{
        
        const {prompt} = req.body;
        if(!prompt){
            res.status(400).json({
                success: false,
                message: 'Invalid or prompt not entered...'
            })
        }
        
        const response = await responseGen(prompt);
        res.status(200).json({
            success: true,
            message: response
        })
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: `ERROR: ${err.message}`
        })
    }
}

export default codeReviwer;