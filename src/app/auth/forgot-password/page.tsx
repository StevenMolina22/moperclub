import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function ForgotPasswordPage() {
  return (
    <section className="mx-auto w-full max-w-md py-12 md:py-24">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">Forgot Password</h2>
        <p className="text-muted-foreground">
          Enter your email address below and we&apos;ll send you a link to reset your
          password.
        </p>
      </div>
      <form className="mt-8 space-y-4">
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-1"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Reset Password
        </Button>
      </form>
    </section>
  );
}

export default ForgotPasswordPage;
