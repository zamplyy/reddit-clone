import React from "react";
import { Formik, Form } from "formik";
import { Box, Button, Heading } from "@chakra-ui/core";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";

interface loginProps {}

export const Login: React.FC<loginProps> = ({}) => {
  const [, login] = useLoginMutation();
  const router = useRouter();
  return (
    <Box>
      <Heading
        marginTop={4}
        marginX="auto"
        maxW="600px"
        w="100%"
        textAlign="center"
      >
        Login
      </Heading>
      <Wrapper variant="small">
        <Formik
          onSubmit={async (values, { setErrors }) => {
            const response = await login(values);
            if (response.data?.login.errors) {
              setErrors(toErrorMap(response.data.login.errors));
            } else if (response.data?.login.user) {
              //worked
              router.push("/");
            }
          }}
          initialValues={{ username: "", password: "" }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="username"
                placeholder="username..."
                label="Username"
              />
              <Box mt={4}>
                <InputField
                  name="password"
                  placeholder="password..."
                  label="Password"
                  type="password"
                />
              </Box>
              <Button
                mt={8}
                variantColor="green"
                type="submit"
                isLoading={isSubmitting}
                color="black"
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Box>
  );
};

export default Login;
