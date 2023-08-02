import React, { useImperativeHandle } from "react";
import { ImageSourcePropType, FlexStyle, ViewStyle } from "react-native";
import {
    useForm,
    Controller,
    UseFormHandleSubmit,
    DeepPartial,
    Path,
    UseFormSetValue
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema } from "yup";
import type Lazy from "yup/lib/Lazy";

import { Input } from "../components/Input";

export type FieldType = {
    name: string;
    placeholder: string;
    value: string;
    label?: string;
    icon?: ImageSourcePropType;
    containerStyles?: Array<FlexStyle> | Array<ViewStyle> | FlexStyle | ViewStyle;
    secureText?: boolean;
    component?: JSX.Element;
    editable?: boolean;
    onChangeText?: (val: string) => void;
    isLoading?: boolean;
};

type FormProps = {
    config: Array<FieldType>;
    formRef: any;
    validationSchema: AnyObjectSchema | Lazy<any, unknown>;
};

export type FormRefType<T> = {
    handleSubmit: UseFormHandleSubmit<T>;
    setValue: UseFormSetValue<T>;
};

const Form = <T,>(props: FormProps) => {
    const { config = [], formRef, validationSchema } = props;
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<T>({
        defaultValues: getInitialValues() as DeepPartial<T>,
        resolver: yupResolver(validationSchema)
    });
    useImperativeHandle(formRef, () => ({
        handleSubmit,
        setValue
    }));

    function getInitialValues(): T {
        let obj: any = {};
        config.forEach((item: FieldType) => {
            const { name, value } = item;
            obj[name] = value;
        });
        return obj;
    }

    function renderComponent(field: FieldType, onChange: (text: string) => void, value: string) {
        if (field && field.component) {
            const { component, name, placeholder, containerStyles } = field;
            const clonedElement = React.cloneElement(component, {
                containerStyles,
                onChange,
                value,
                placeholder,
                error: errors[name as Path<T>]?.message as any
            });

            return clonedElement;
        }
        return null;
    }

    return (
        <React.Fragment>
            {config.map((field: FieldType, index) => {
                const {
                    containerStyles = {},
                    placeholder = "",
                    name = "",
                    icon,
                    secureText = false,
                    component = null,
                    label = "",
                    editable,
                    onChangeText = undefined,
                    isLoading
                } = field;
                return (
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <React.Fragment>
                                {component ? (
                                    renderComponent(field, onChange, value as string)
                                ) : (
                                    <Input
                                        containerStyles={containerStyles}
                                        onChange={(val: string) => {
                                            onChange(val);
                                            onChangeText && onChangeText(val);
                                        }}
                                        value={value as string}
                                        label={label}
                                        placeholder={placeholder}
                                        icon={icon}
                                        error={errors[name as Path<T>]?.message as any}
                                        secureText={secureText}
                                        onBlur={onBlur}
                                        editable={editable}
                                        isLoading={isLoading}
                                    />
                                )}
                            </React.Fragment>
                        )}
                        key={index + "-" + name}
                        name={name as Path<T>}
                    />
                );
            })}
        </React.Fragment>
    );
};

export { Form };