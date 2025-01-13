"use client";

import useSignupState from "./_hooks/useSignupState";
import { AuthLayout, Label, Input, Button } from "@/components";
import { matchField, minLength, required } from "@/utils/rules";
import { validate } from "@/utils/validators";
import { ValidationRule } from "@/types/validation.type";
import { fetchDataFromFirestoreWithQuery } from "@/lib/firestore";
import { where, limit } from "firebase/firestore";

type SignupState = {
  id: string;
  nickname: string;
  password: string;
  confirmPassword: string;
};

const SignupPage: React.FunctionComponent = () => {
  const { value, setValue } = useSignupState<SignupState>({
    id: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    const rules: ValidationRule<SignupState>[] = [
      required("id"),
      required("nickname"),
      minLength("password", 6),
      matchField("confirmPassword", "password"),
    ];

    // alert X!!
    const errors = validate<SignupState>(value, rules);
    if (errors.length > 0) {
      alert(
        errors.map((error) => `${error.field}: ${error.message}`).join("\n")
      );
      return;
    }

    processSignup();
  };

  const processSignup = async () => {
    // const sameNicknameUsers = await getUsersWithSameNickname(value.nickname);
    // if (sameNicknameUsers.length > 0) {
    //   // 닉네임 중복
    //   return;
    // }
    // try {
    //   const signupUser = signupWithEmail(
    //     `${value.id}@gmail.com`,
    //     value.password
    //   );
    //   console.log("signupUser", signupUser);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <AuthLayout>
      <Label size="xl" weight="bold" align="center">
        회원가입
      </Label>
      <div className="flex flex-col gap-2 p-5">
        <Input
          name="id"
          placeholder="아이디 😀"
          type="text"
          value={value.id}
          onChange={setValue}
        />
        <Input
          name="nickname"
          placeholder="닉네임 😁"
          type="text"
          value={value.nickname}
          onChange={setValue}
        />
        <Input
          name="password"
          placeholder="비밀번호 🤫"
          type="password"
          value={value.password}
          onChange={setValue}
        />
        <Input
          name="confirmPassword"
          placeholder="비밀번호 확인 🤓"
          type="password"
          value={value.confirmPassword}
          onChange={setValue}
        />
      </div>
      <div className="flex gap-2 p-5">
        <Button block variant="tertiary">
          취소
        </Button>
        <Button block onClick={handleSubmit}>
          확인
        </Button>
      </div>
    </AuthLayout>
  );
};

const getUsersWithSameNickname = async (nickname: string) => {
  try {
    const sameNicknameUsers = await fetchDataFromFirestoreWithQuery("users", [
      where("nickname", "==", nickname),
      limit(1),
    ]);
    return sameNicknameUsers;
  } catch (error) {
    throw error;
  }
};

export default SignupPage;
