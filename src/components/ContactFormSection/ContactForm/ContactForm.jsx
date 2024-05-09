"use client";
import styles from "./ContactForm.module.scss";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { formScheme } from "./formScheme";
import MainButton from "../../shared/MainButton/MainButton";
import InputField from "../../shared/InputField/InputField";

export default function ContactForm() {
  const t = useTranslations("Main.feedback_form");
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({ defaultValues: { ...formScheme.defaultValues } });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const isDisabled = () => {
    if (errors.firstName || errors.email || errors.message) {
      return true;
    } else if (isDirty && !isValid) {
      return true;
    } else return false;
  };
  console.log(errors.firstName);
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <ul className={styles.list}>
        <InputField
          id={"firstName"}
          placeholder={t("name")}
          registerOptions={register("firstName", { ...formScheme.firstName })}
          isError={errors.firstName}
          isValid
          version={"input"}
          label={t("name")}
        />
        <InputField
          id={"email"}
          placeholder={"email@gmail.com"}
          registerOptions={register("email", { ...formScheme.email })}
          isError={errors.email}
          isValid
          version={"input"}
          label={t("email")}
        />
        <InputField
          id={"message"}
          placeholder={t("message_placeholder")}
          registerOptions={register("message", { ...formScheme.message })}
          isError={errors.message}
          isValid
          version={"textArea"}
          label={t("message")}
        />
      </ul>
      <MainButton type="submit" disabled={isDisabled} className={styles.submit}>
        {t("btn_send")}
      </MainButton>
    </form>
  );
}