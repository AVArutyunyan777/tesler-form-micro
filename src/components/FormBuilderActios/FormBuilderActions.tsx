import React from 'react'
import Input from 'antd/lib/input'

export type TActionsValues = {
    product?: string | number | readonly string[] | undefined
    version?: string | number | readonly string[] | undefined
}

interface IFormBuilderActions {
    values: TActionsValues
    onChange: (values: TActionsValues) => void
}

const FormBuilderActions: React.FC<IFormBuilderActions> = ({ values, onChange }) => {
    return (
        <>
            <Input
                placeholder="Продукт"
                defaultValue={values?.product}
                onChange={event =>
                    onChange({
                        product: event.target.value
                    })
                }
                style={{ marginRight: 4 }}
            />
            <Input
                placeholder="Версия"
                defaultValue={values?.version}
                onChange={event =>
                    onChange({
                        version: event.target.value
                    })
                }
            />
        </>
    )
}

export default FormBuilderActions