
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  language: z.string().optional(),
  useCase: z.string(),
  allowTelemetry: z.boolean().default(true),
  autoStart: z.boolean().default(true),
});

interface SetupFormProps {
  onSubmit: () => void;
}

const SetupForm = ({ onSubmit }: SetupFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      language: "english",
      useCase: "productivity",
      allowTelemetry: true,
      autoStart: true,
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data);
    onSubmit();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Language (Optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                DeskMate will use this language for communication
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="useCase"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Primary Use Case</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="productivity" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Productivity & Task Management
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="files" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      File Management & Organization
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="reminders" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Reminders & Calendar
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">All Features</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="allowTelemetry"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Usage Analytics
                </FormLabel>
                <FormDescription>
                  Allow DeskMate to collect anonymous usage data to help improve the product
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="autoStart"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Start at Login
                </FormLabel>
                <FormDescription>
                  Launch DeskMate automatically when your computer starts
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-6">
          Complete Setup
        </Button>
      </form>
    </Form>
  );
};

export default SetupForm;
