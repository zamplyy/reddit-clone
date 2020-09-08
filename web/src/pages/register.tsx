import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/core";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import { useMutation } from "urql";

interface registerProps {}

const REGISTER_MUT = `mutation Register($username:String!, $password:String!){
    register(options: 
      { 
        username: $username, password: $password 
      }
    ) {
      id
      username
    }
  }
  `;

export const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useMutation(REGISTER_MUT);

  return (
    <Wrapper variant="small">
      <Formik
        onSubmit={(values) => {
          return register(values);
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
              variantColor="teal"
              type="submit"
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
