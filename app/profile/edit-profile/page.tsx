"use client";
import Navigation from "@/components/shared/Navigation";
import React, { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  profilepic: z.string(),
  email: z.string(),
  bio: z.string(),
  courses: z.string(),
  facebook: z.string(),
  linkedin: z.string(),
  github: z.string(),
});

function Page() {
  const [base64Image, setBase64Image] = useState("");
  const { data: session, status, update }: any = useSession();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: session?.user?.userName || "",
      firstname: session?.user?.firstName || "",
      lastname: session?.user?.lastName || "",
      profilepic: session?.user?.lastName || "",
      email: session?.user?.email || "",
      bio: session?.user?.bio || "",
      courses: session?.user?.courses || "",
      facebook: session?.user?.facebook || "",
      linkedin: session?.user?.linkedin || "",
      github: session?.user?.github || "",
    },
  });
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setBase64Image(reader.result);
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    try {
      const response = await fetch("/api/edit-profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username || session?.user?.userName,
          firstname: values.firstname || session?.user?.firstName,
          lastname: values.lastname || session?.user?.lastName,
          profilepic: base64Image || session?.user?.profilepic,
          bio: values.bio || session?.user?.bio,
          courses: values.courses || session?.user?.courses,
          facebook: values.facebook || session?.user?.facebook,
          linkedin: values.linkedin || session?.user?.linkedin,
          github: values.github || session?.user?.github,
        }),
      });
      if (response.status === 200) {
        update();
        router.push("/profile");
      } else {
        const errorData = await response.json();
        console.error("Error updating profile:", errorData.message);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  }

  if (!session) {
    redirect("/");
  }
  if (status === "loading") {
    return (
      <div role="status" className="h-[100vh] flex justify-center items-center">
        <svg
          aria-hidden="true"
          className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFEFA] h-[100vh]">
      <div className="container">
        <Navigation name="edit-profile" />
        <div className="text-[#4F7853]">
          <section className="max-w-[1200px] border-4 border-[#4F7853] rounded-xl p-5 mx-auto max-[450px]:border-none max-[450px]:p-0">
            <div className="flex items-center border-b-2 pb-4 border-[#4F7853]">
              <h1 className="font-bold text-[18px] mr-auto">Edit Profile</h1>
            </div>
            <div className="max-w-[80%] flex-col justify-between  items-center mx-auto max-[450px]:max-w-[100%]">
              <div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="font-bold space-y-8"
                  >
                    <div className="flex justify-between items-center mt-8 max-[660px]:flex-col mb-4">
                      <div className="max-[660px]:hidden">
                        <p className="font-bold  text-[18px]">Display Photo</p>
                        <p>150 x 150 px</p>
                      </div>
                      <Image
                        src={
                          base64Image
                            ? base64Image
                            : session.user?.profilepic ||
                              "/elements/Avatar2.png"
                        }
                        alt="avatar"
                        width={150}
                        height={150}
                        className="mb-2 rounded-full object-cover object-top w-[150px] h-[150px]"
                      />
                      <div className="flex flex-col max-w-[140px] w-full space-y-2 text-black ">
                        <Input
                          type="file"
                          accept="image/*"
                          className="max-w-[150px] w-full hover:border-[#4F7853] cursor-pointer hover:bg-slate-50 transition-all duration-300"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h2 className="font-bold text-[18px] ">Information</h2>
                      <div className="grid grid-cols-2 gap-2 max-[660px]:grid-cols-1">
                        <FormField
                          control={form.control}
                          name="firstname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder={session.user?.firstname}
                                  className="border-muted-foreground border focus-visible:border-[#7ec285] focus-visible:ring-0 focus-visible:ring-offset-0 w-full flex-1"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder={session.user?.lastname}
                                  className="border-muted-foreground border focus-visible:border-[#7ec285] focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2 max-[660px]:grid-cols-1">
                        <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Username</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder={session.user?.username}
                                  className="border-muted-foreground border focus-visible:border-[#7ec285] focus-visible:ring-0 focus-visible:ring-offset-0 w-full flex-1"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-mail</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder={session.user?.email}
                                  value={session.user?.email}
                                  className="border-muted-foreground border focus-visible:border-[#7ec285] focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Write a short bio about yourself
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder={session.user?.bio}
                                className="border-muted-foreground border focus-visible:border-[#7ec285] focus-visible:ring-0 focus-visible:ring-offset-0 w-full flex-1"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="courses"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Course</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder={session.user?.courses}
                                className="border-muted-foreground border focus-visible:border-[#7ec285] focus-visible:ring-0 focus-visible:ring-offset-0 w-full flex-1"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* User Socials*/}
                    <div>
                      <h2 className="font-bold text-[18px]">Socials</h2>
                      <div className="grid grid-cols-2 gap-2 max-[660px]:grid-cols-1">
                        <FormField
                          control={form.control}
                          name="facebook"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Facebook</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder={session.user?.facebook}
                                  className="border-muted-foreground border focus-visible:border-[#7ec285] focus-visible:ring-0 focus-visible:ring-offset-0 w-full flex-1"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="linkedin"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>LinkedIn</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder={session.user?.linkedin}
                                  className="border-muted-foreground border focus-visible:border-[#7ec285] focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="github"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>GitHub</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder={session.user?.github}
                                  className="border-muted-foreground border focus-visible:border-[#7ec285] focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#81BC87] font-bold text-[18px] text-white py-1 px-5 rounded-lg hover:bg-transparent hover:text-[#4F7853] hover:border-[#4F7853] border transition-all duration-300"
                    >
                      Save Changes
                    </button>
                  </form>
                </Form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Page;
