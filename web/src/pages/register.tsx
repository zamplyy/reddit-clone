import React from "react";
import { Formik, Form } from "formik";
import { FormLabel, Input, FormControl, Box, Button } from "@chakra-ui/core";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        onSubmit={(values) => {
          console.log(values);
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
