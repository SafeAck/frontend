'use client';

import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";


const PasswordInput = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md' mb={3}>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='*******************'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }

export default PasswordInput;