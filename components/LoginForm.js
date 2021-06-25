import { useState, useCallback } from "react";
import { Input, Form, Button } from "antd";
import Link from "next/link";
import Password from "antd/lib/input/Password";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePwd = useCallback((e) => {
    setPwd(e.target.value);
  }, []);

  //   const style = useMemo(() => ({ marginTop: 10 }), []);
  // ant design에서 Form - onFinish는 (e)=> { e.preventDefault(); } 자동 적용이 되어있다.
  // 한 component에 넣는 거니까 useCallback으로 감싸기 (무슨말인지 모르겠음)
  const onSubmitForm = useCallback(() => {
    console.log(id);
  }, []);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required></Input>
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={pwd} onChange={onChangePwd} required></Input>
      </div>
      <ButtonWrapper>
        {/* <ButtonWrapper style={style}> */}
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </ButtonWrapper>
    </Form>
  );
};

export default LoginForm;
