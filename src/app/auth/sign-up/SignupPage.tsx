import { AuthLayout, Label, Input, Button } from "@/components";
import useInput from "@/hooks/useInput";

export const SignupPage: React.FunctionComponent = () => {
  const { value, setValue } = useInput({
    id: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (value.password !== value.confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    console.log(value);
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
          onChange={handleChange}
        />
        <Input
          name="nickname"
          placeholder="닉네임 😁"
          type="text"
          value={value.nickname}
          onChange={handleChange}
        />
        <Input
          name="password"
          placeholder="비밀번호 🤫"
          type="password"
          value={value.password}
          onChange={handleChange}
        />
        <Input
          name="confirmPassword"
          placeholder="비밀번호 확인 🤓"
          type="password"
          value={value.confirmPassword}
          onChange={handleChange}
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
