import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormWrapper from "@/components/form-elements/FormWrapper";
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import CustomNumberInput from "@/components/common/CustomNumberInput";
import {
  childGradeData,
  pointersChildGradeData,
  selectDateData,
  slotData,
} from "@/constants/data";

// import Image from "../assets/images/"

const validationSchemaStep3 = Yup.object({
  childName: Yup.string().required("Child Name is required"),
  parentName: Yup.string().required("Parent Name is required"),
  parentEmail: Yup.string().required("Parent Email is required"),
  phoneNumber: Yup.string().required("Parent Phone Number is required"),
});

const validationSchemaStep2 = Yup.object({
  selectDate: Yup.string().required("Date is required"),
  selectSlot: Yup.string().required("Slot is required"),
});

const validationSchemaStep1 = Yup.object({
  whatsAppNumber: Yup.string().required("phoneNumber is required"),
  selectGrade: Yup.string().required("Grade is required"),
});

export default function Home() {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm({
    resolver: yupResolver(validationSchemaStep1),
  });

  const handleNextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setStep(step + 1);
      if (step === 1) {
        setValue("firstName", "");
        setValue("lastName", "");
      } else if (step === 2) {
        setValue("email", "");
        setValue("phone", "");
      } else if (step === 3) {
        setValue("address", "");
        setValue("city", "");
      }
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const getProgress = () => {
    switch (step) {
      case 1:
        return 30;
      case 2:
        return 60;
      case 3:
        return 100;
      default:
        return 0;
    }
  };
  // Start your Child's Journey to Becoming a CREATOR for Life!
  const onSubmit = (data) => {
    // Handle final form submission
    setShowModal(true);
    console.log(data);
  };
  const Step1Form = () => (
    <FormWrapper
      title={"Book a Free Trail Class Now!"}
      pointersData={pointersChildGradeData}
      pointerTitle={
        "Start your Child's Journey to Becoming a CREATOR for Life!"
      }
      page={step}
      note="We’ll send the class link and details via email and WhatsApp"
      secondryNote1="Laptop or desktop is compulsory for this class."
      secondryNote2="By proceeding further, you agree to our Terms & Conditions and our Privacy Policy."
      getProgress={getProgress}
    >
      <form onSubmit={handleSubmit(handleNextStep)}>
        
        <CustomInput
          name="whatsAppNumber"
          label="Enter WhatsApp Number"
          placeholder="8787878787"
          control={control}
          error={errors.whatsAppNumber?.message}
          inputType="mobile"
        />

        <CustomNumberInput
          data={childGradeData}
          label="Select Child's Grade"
          name="selectGrade"
          control={control}
          error={errors.selectGrade?.message}
        />

        <CustomButton label="Confirm Slot" icon={false} />
      </form>
    </FormWrapper>
  );
  //
  const Step2Form = () => (
    <FormWrapper
      title={"Select Slot for Free Class"}
      pointersData={pointersChildGradeData}
      pointerTitle="Start Your Child's Journey"
      page={step}
      getProgress={getProgress}
    >
      <form onSubmit={handleSubmit(handleNextStep)}>
        <CustomNumberInput
          data={selectDateData}
          label="Select Child's Grade"
          name="selectDate"
          control={control}
          error={errors.selectDate?.message}
        />
        <CustomNumberInput
          data={slotData}
          label="Select Child's Grade"
          name="selectSlot"
          control={control}
          error={errors.selectSlot?.message}
        />

        <CustomButton label="Confirm Slot" icon={false} />
      </form>
    </FormWrapper>
  );
  const Step3Form = () => (
    <FormWrapper
      title={"Contact Details"}
      note="We'll send the class link and details via email and WhatsApp"
      pointersData={pointersChildGradeData}
      pointerTitle="Start Your Child's Journey"
      page={step}
      getProgress={getProgress}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          name="childName"
          label="Please Enter Following Details."
          placeholder="Enter Child's Name"
          control={control}
          error={errors.childName?.message}
        />
        <CustomInput
          name="parentName"
          label=""
          placeholder="Enter Parent Name"
          control={control}
          error={errors.parentName?.message}
        />

        <CustomInput
          name="parentEmail"
          label=""
          placeholder="Parent Email ID"
          control={control}
          error={errors.parentEmail?.message}
        />
        <CustomInput
          name="phoneNumber"
          label=""
          placeholder="8787878787"
          control={control}
          error={errors.phoneNumber?.message}
          inputType="mobile"
        />

        <CustomButton label="Book my free class!" icon={false} />
      </form>
    </FormWrapper>
  );

  // Switch validation schema based on the step
  const setValidationSchema = () => {
    switch (step) {
      case 1:
        return validationSchemaStep1;
      case 2:
        return validationSchemaStep2;
      case 3:
        return validationSchemaStep3;
      default:
        return validationSchemaStep1;
    }
  };

  // Update the resolver dynamically for each step
  const {
    control: newControl,
    handleSubmit: newHandleSubmit,
    formState: newFormState,
    setValue: newSetValue,
    trigger: newTrigger,
  } = useForm({
    resolver: yupResolver(setValidationSchema()),
  });

  const currentForm = () => {
    switch (step) {
      case 1:
        return <Step1Form />;
      case 2:
        return <Step2Form />;
      case 3:
        return <Step3Form />;
      default:
        return <Step1Form />;
    }
  };
  return (
    <div
      className={`relative ${
        step === 1
          ? "bg-[url(../assets/images/form-bg-mobile-1.jpeg)] sm:bg-[url(../assets/images/form-bg-1.jpeg)]"
          : step === 2
          ? "bg-[url(../assets/images/form-bg-mobile-2.jpeg)] sm:bg-[url(../assets/images/form-bg-2.jpeg)]"
          : "bg-[url(../assets/images/form-bg-mobile-3.jpeg)] sm:bg-[url(../assets/images/form-bg-3.jpeg)]"
      } aspect-[395/1600] sm:aspect-[16/9] bg-no-repeat bg-cover bg-top w-full flex justify-center items-start sm:items-center`}
    >
      <div className="absolute sm:mx-24">
        <div>{currentForm()}</div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg 
                  className="h-8 w-8 text-green-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Success!</h3>
              <p className="text-sm text-gray-500 mb-6">
                Your details have been successfully submitted. We'll contact you shortly.
              </p>
              <button
                onClick={() => setShowModal(false)}
                // className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                 className="w-full bg-violet-600 cursor-pointer py-2 rounded-lg flex justify-center items-center gap-2 "
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}