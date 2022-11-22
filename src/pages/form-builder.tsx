import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import 'tesler-form-builder/dist/index.css'
import {useCallback, useState} from "react";
import {IFormilySchema} from "tesler-form-builder/dist/views/FormBuilder";
import FormBuilderActions, {TActionsValues} from "../components/FormBuilderActios/FormBuilderActions";


const FormBuilder = dynamic(() => import('tesler-form-builder'),{
    ssr: false
})

interface IFormilySchemaContext extends IFormilySchema{
    context?: TActionsValues
}

const FormBuilderPage: NextPage = () => {
    const [reqJson, setReqJson] = useState<IFormilySchemaContext>({
        /**
         * Mock
         */
        // context: {
        //     product: 'ASD',
        //     version: '1.0'
        // },
        // form: {
        //     labelCol: 6,
        //     wrapperCol: 12
        // },
        // schema: {
        //     type: 'object',
        //     properties: {
        //         'input-[id]': {
        //             type: 'string',
        //             title: 'Input',
        //             'x-decorator': 'FormItem',
        //             'x-component': 'Input',
        //             'x-validator': [],
        //             'x-component-props': {},
        //             'x-decorator-props': {},
        //             'x-index': 0
        //         },
        //         'textArea-[id]': {
        //             type: 'string',
        //             title: 'TextArea',
        //             'x-decorator': 'FormItem',
        //             'x-component': 'Input.TextArea',
        //             'x-validator': [],
        //             'x-component-props': {},
        //             'x-decorator-props': {},
        //             'x-index': 1
        //         }
        //     }
        // }
    })

    const {
        context = {
            product: undefined,
            version: undefined
        },
        ...rawJson
    } = reqJson

    const [json, setJson] = useState<IFormilySchemaContext>(rawJson)
    const onSave = useCallback((jsonValue: IFormilySchemaContext) => {
        setJson(jsonValue)
    }, [])

    const [values, setValues] = useState<TActionsValues>(context)
    const onChangeActions = useCallback(
        (newValues: TActionsValues) =>
            setValues(prevValues => {
                return { ...prevValues, ...newValues }
            }),
        []
    )

    const onPublish = useCallback(
        (jsonValue: IFormilySchemaContext) => {
            onSave(jsonValue)
            setReqJson({
                ...jsonValue,
                context: values
            })
            const requestBody = {
                product: values.product,
                version: values.version,
                jsonValue
            }
            console.log(requestBody)
            // axiosInstance()
            //     .post('/formbuilder/saveTemplate', requestBody)
            //     .then(res => console.log(res))
        },
        [onSave, values]
    )

    return (
        <div className="fb__container">
            <FormBuilder 
                initialJson={json}
                onSave={onSave}
                onPublish={onPublish}
                actions={<FormBuilderActions values={values} onChange={onChangeActions} />}
            />
        </div>
    )
}

export default FormBuilderPage