import { AuthLayout, Label, Input, Button } from "@/components";

const SignupPage: React.FunctionComponent = () => {
  return (
    <AuthLayout>
      <Label size="xl" weight="bold" align="center">
        회원가입
      </Label>
      <div className="flex flex-col gap-2 p-5">
        <Input placeholder="아이디 😀" type="text" />
        <Input placeholder="닉네임 😁" type="text" />
        <Input placeholder="비밀번호 🤫" type="text" />
        <Input placeholder="비밀번호 확인 🤓" type="text" />
      </div>
      <div className="flex gap-2 p-5">
        <Button block variant="tertiary">
          취소
        </Button>
        <Button block>확인</Button>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
