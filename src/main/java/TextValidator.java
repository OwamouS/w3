package main.java;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
import java.util.regex.Matcher;
@FacesValidator ("textValidator")
public class TextValidator implements Validator {
    @Override
    public void validate(FacesContext context, UIComponent component,
                         Object value) throws ValidatorException
    {
            try{
                if(value.toString().length()==0){return;}
                if(value.toString().trim()==""){return;}
                Double val= Double.parseDouble(value.toString());
                if(val==7){return;}
                if(val>=3||val<=-5){
                    FacesMessage msg =new FacesMessage("Проверьте, промежуток!");
                    msg.setSeverity(FacesMessage.SEVERITY_ERROR);
                    throw new ValidatorException(msg);
                }
            }
            catch(IllegalArgumentException e){
                FacesMessage msg =new FacesMessage("Проверьте,что вы ввели именно число!");
                msg.setSeverity(FacesMessage.SEVERITY_ERROR);
                throw new ValidatorException(msg);
            }
    }
}

