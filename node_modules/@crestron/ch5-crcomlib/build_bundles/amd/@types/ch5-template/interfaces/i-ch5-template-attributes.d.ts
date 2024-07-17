import { ICh5CommonAttributesTemplate } from "../../ch5-common/interfaces/i-ch5-common-attributes-template";
export interface ICh5TemplateAttributes extends ICh5CommonAttributesTemplate {
    templateId: string;
    context: string;
    contractName: string;
    booleanJoinOffset: string;
    numericJoinOffset: string;
    stringJoinOffset: string;
}
