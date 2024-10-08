"use client"
import { hexToRGBA } from "@/lib/hex-to-rgba"
import LoadingButton from "@mui/lab/LoadingButton"
import { Box, Button, Divider, Grid, IconButton, Paper, TextField, Typography } from "@mui/material"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { CIcon } from "@padma/metajob-ui"

const AuthLogin = ({ callbackUrl, error }: { error: string | undefined; callbackUrl: string | undefined }) => {
   const [loading, setLoading] = useState(false)
   useEffect(() => {
      const closeId = setTimeout(() => {
         if (error) {
            if (error === "CredentialsSignin") {
               toast.error("Email or password is incorrect", {
                  duration: 5000,
                  position: "top-center",
                  style: {
                     borderRadius: "6px",
                     boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.05)",
                     border: "1px solid rgba(0, 0, 0, 0.1)",
                     color: "#F87171"
                  }
               })

               return
            }

            if (error === "EmailCreateAccount") {
               toast.error("Email is already in use", {
                  duration: 5000,
                  position: "top-center",
                  style: {
                     borderRadius: "6px",
                     boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.05)",
                     border: "1px solid rgba(0, 0, 0, 0.1)",
                     color: "#F87171"
                  }
               })

               return
            }

            if (error === "CallbackRouteError") {
               toast.error("Maybe you are trying a wrong account", {
                  duration: 5000,
                  position: "top-center",
                  style: {
                     borderRadius: "6px",
                     boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.05)",
                     border: "1px solid rgba(0, 0, 0, 0.1)",
                     color: "#F87171"
                  }
               })

               return
            }

            toast.error("Something went wrong", {
               duration: 5000,
               position: "top-center",
               style: {
                  borderRadius: "6px",
                  boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  color: "#F87171"
               }
            })
         }
      }, 100)

      return () => {
         clearTimeout(closeId)
      }
   }, [error])
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm({
      mode: "onChange",
      defaultValues: {
         username: "",
         password: ""
      }
   })

   // *** Handle Submit
   const onSubmit = async (data: any) => {
      setLoading(true)

      await signIn("credentials", {
         username: data.username,
         password: data.password,
         redirect: true,
         callbackUrl: callbackUrl || process.env.NEXTAUTH_URL
      }).then(() => {
         setLoading(false)
      })
   }

   return (
      <Grid container direction='column' justifyContent='flex-end' sx={{ minHeight: "85vh" }}>
         <Grid item xs={12}>
            <Grid container justifyContent='center' alignItems='center' sx={{ minHeight: "calc(100vh - 68px)" }}>
               <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                  <Grid container spacing={2} alignItems='center' justifyContent='center'>
                     <Grid item xs={12}>
                        <Paper
                           sx={{
                              borderRadius: "16px",
                              maxWidth: "400px",
                              width: "100%",
                              p: 4,
                              mx: "auto", // 'auto' is not working, so I used 'center'
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              boxShadow: "0px 6px 24px 0px rgba(6, 129, 121, 0.08)"
                           }}>
                           <Grid container direction='column' justifyContent='center' spacing={2}>
                              <Grid item xs={12} container alignItems='center' justifyContent='center'>
                                 <Box sx={{ mb: 2 }}>
                                    <Typography
                                       fontSize={24}
                                       fontWeight={400}
                                       color={(theme) => theme.palette.text.primary}>
                                       Sign in with Email address
                                    </Typography>
                                 </Box>

                                 <Box
                                    component='form'
                                    sx={{
                                       display: "flex",
                                       flexDirection: "column",
                                       gap: 2,
                                       width: "100%",
                                       "& .MuiTextField-root": { width: "100%" }
                                    }}
                                    noValidate
                                    autoComplete='off'
                                    onSubmit={handleSubmit(onSubmit)}>
                                    <TextField
                                       hiddenLabel
                                       id='username'
                                       defaultValue=''
                                       placeholder='Username or Email'
                                       variant='outlined'
                                       size='medium'
                                       fullWidth
                                       {...register("username", {
                                          required: "This field is required"
                                       })}
                                       helperText={errors.username?.message}
                                       error={!!errors.username}
                                    />
                                    <TextField
                                       hiddenLabel
                                       id='password'
                                       placeholder='Password'
                                       defaultValue=''
                                       variant='outlined'
                                       size='medium'
                                       type='password'
                                       fullWidth
                                       {...register("password", {
                                          required: "This field is required"
                                       })}
                                       helperText={errors.password?.message}
                                       error={!!errors.password}
                                    />
                                    <LoadingButton
                                       type='submit'
                                       variant='contained'
                                       loading={loading}
                                       loadingPosition='start'
                                       size='large'
                                       fullWidth
                                       sx={{ mt: 2 }}>
                                       Sign in
                                    </LoadingButton>
                                 </Box>
                              </Grid>

                              <Grid item xs={12}>
                                 <Box
                                    sx={{
                                       alignItems: "center",
                                       display: "flex"
                                    }}>
                                    <Divider
                                       sx={{
                                          flexGrow: 1,
                                          borderColor: (theme) => hexToRGBA(theme.palette.text.disabled, 0.4)
                                       }}
                                       orientation='horizontal'
                                    />

                                    <Button
                                       variant='outlined'
                                       sx={{
                                          cursor: "unset",
                                          m: 2,
                                          py: 0.5,
                                          px: 7,
                                          fontWeight: 500,
                                          borderRadius: "10px",
                                          // disable color
                                          "&.Mui-disabled": {
                                             borderColor: (theme) =>
                                                hexToRGBA(theme.palette.text.disabled, 0.4) + "!important",
                                             color: (theme) =>
                                                hexToRGBA(theme.palette.text.disabled, 0.4) + "!important"
                                          }
                                       }}
                                       disableRipple
                                       disabled>
                                       OR
                                    </Button>

                                    <Divider
                                       sx={{
                                          flexGrow: 1,
                                          borderColor: (theme) => hexToRGBA(theme.palette.text.disabled, 0.4)
                                       }}
                                       orientation='horizontal'
                                    />
                                 </Box>
                              </Grid>
                              <Box
                                 sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 2,
                                    marginTop: "15px !important"
                                 }}>
                                 <IconButton
                                    size='large'
                                    // onClick={handleOpenNavMenu}
                                    color='secondary'
                                    sx={{
                                       p: 1,
                                       borderRadius: 2,
                                       border: "1px solid",
                                       // google color
                                       borderColor: "#DB4437"
                                    }}
                                    onClick={() => {
                                       signIn("google", {
                                          callbackUrl: callbackUrl ?? process.env.NEXTAUTH_URL
                                       })
                                    }}>
                                    <CIcon icon='flat-color-icons:google' />
                                 </IconButton>
                                 {/* Facebook */}
                                 <IconButton
                                    size='large'
                                    // onClick={handleOpenNavMenu}
                                    color='secondary'
                                    sx={{
                                       p: 1,
                                       borderRadius: 2,
                                       border: "1px solid",
                                       // facebook color
                                       borderColor: "#3B5998"
                                    }}
                                    onClick={() => {
                                       signIn("facebook", {
                                          callbackUrl: callbackUrl ?? process.env.NEXTAUTH_URL
                                       })
                                    }}>
                                    <CIcon icon='logos:facebook' />
                                 </IconButton>
                                 {/* LinkedIn */}
                                 <IconButton
                                    size='large'
                                    // onClick={handleOpenNavMenu}
                                    color='secondary'
                                    sx={{
                                       p: 1,
                                       borderRadius: 2,
                                       border: "1px solid",
                                       // linkedin color
                                       borderColor: "#0077B5"
                                    }}
                                    onClick={() => {
                                       signIn("linkedin", {
                                          callbackUrl: callbackUrl ?? process.env.NEXTAUTH_URL
                                       })
                                    }}>
                                    <CIcon
                                       icon='entypo-social:linkedin-with-circle'
                                       sx={{
                                          // linkedin color
                                          color: "#0077B5"
                                       }}
                                    />
                                 </IconButton>
                              </Box>
                              <Typography
                                 variant='body2'
                                 color={(theme) => theme.palette.text.secondary}
                                 fontSize={14}
                                 fontWeight={400}
                                 sx={{
                                    mt: 2,
                                    textAlign: "center"
                                 }}>
                                 Not a Member ?{" "}
                                 <Typography
                                    component={Link}
                                    href='/register'
                                    color={(theme) => theme.palette.primary.main}
                                    fontSize={14}
                                    fontWeight={400}
                                    sx={{
                                       textDecoration: "none",
                                       cursor: "pointer"
                                    }}>
                                    Create Account
                                 </Typography>
                              </Typography>
                           </Grid>
                        </Paper>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   )
}

export default AuthLogin
