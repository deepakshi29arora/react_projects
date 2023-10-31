import { Card, Container,Center,Text, Stack, FormControl, FormLabel, Input, Flex, Checkbox, Button, FormErrorMessage, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {Formik,Form,Field} from "formik"
import { object, string, ref } from 'yup';
import { useMutation } from 'react-query';
import { signinUser } from '../../../api/query/userQuery';

const signinValidationSchema = object({
    // fname: string().required("First name is required"),
    // lname: string().required("Last name is required"),
    email: string().required("Email is required"),
    pwd : string().min(6,"Password must be atleast 6 characters long").required("Passowrd is required"),
    // retypepwd : string().
    // oneOf([ref('pwd'), null], 'Passwords must match').required("Confirm the password "),
});


const Signin = () => {

    const {mutate,isLoading,error,isError }= useMutation({
    
    mutationKey:["signin"],
    mutationFn:signinUser,


})
if(isError)
{
    <div>{error.message}</div>
}



  return (
    <Container>
        <Center minH="100vh">
            <Card p="6" borderRadius="1rem" width="456px">
                <Text textStyle="h1">Welcome to Crypto App</Text>
                <Text textStyle="p2" color='black.60' mt='4'>Create a Free Account bu filling in the details</Text>
            <Formik initialValues={
                {
                   
                    email:"",
                    pwd:"",
                  

                }
            }
            onSubmit={(values)=>
            {
                mutate(values);
                console.log(values);
            }}
            validationSchema={signinValidationSchema}>
            {()=>(   
            <Form>
            <Stack mt='10'>
                {/* <Flex gap='4'>
                <Field name="fname">
                    {({field,meta})=>(
                <FormControl isInvalid={!!(meta.error && meta.touched)}>
                    <FormLabel htmlFor='fname'>First Name</FormLabel>
                    <Input 
                    {...field}
                    name="fname" placeholder='Enter your first name'></Input>
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
                    )}
                </Field> */}
                {/* <Field name="lname">
                    {({field,meta})=>(
                <FormControl isInvalid={!!(meta.error && meta.touched)}>
                    <FormLabel htmlFor='lname'>Last Name</FormLabel>
                    <Input 
                    {...field}
                    name="lname" placeholder='Enter your last name'></Input>
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
                )}
                </Field>
                </Flex> */}
                <Field name="email">
                {({field,meta})=>(
                <FormControl isInvalid={!!(meta.error && meta.touched)}>

                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input 
                     {...field}
                    name="email" placeholder='Enter your email ID' type='email'></Input>
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
                )}
                </Field>
                <Field name="pwd">
                {({field,meta})=>(
                <FormControl isInvalid={!!(meta.error && meta.touched)}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input  {...field}
                    name="pwd" placeholder='Enter password' type='password'></Input>
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
                )}
                </Field>
                
                {/* <Field name="retypepwd">
                {({field,meta})=>(
                <FormControl isInvalid={!!(meta.error && meta.touched)}>
                    <FormLabel htmlFor='retypepwd'>Re-enter password</FormLabel>
                    <Input  {...field}
                    name="retypepwd" placeholder='Re-enter your password' type='password'></Input>
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                </FormControl>
                )}
                </Field> */}
                <HStack justify="space-between">
                <Checkbox>
                    <Text textStyle="p3" >Remember Me</Text>
                </Checkbox>
                    {/* <Text textStyle='p3'> */}
                    <Link to="/ForgotPwd">
                        
                        <Text textStyle="p3" as="span" color="p.purple">Forgot Password?</Text>
                    </Link>
                    </HStack>    
            <Button type="submit">Login</Button>
            <Text textStyle="p3" color="black.60" textAlign='center'>
                Don't have an account?{" "}
                <Link to ="/Signup">
                    <Text as="span" color="p.purple">Register Here</Text>
                </Link>
            </Text>
            </Stack>
            
            </Form>
            )} 
            </Formik>
            </Card>  
        </Center>

    </Container>
   
  )
}

export default Signin
