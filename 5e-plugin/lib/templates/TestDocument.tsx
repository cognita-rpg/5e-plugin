import { Text, TextInput } from "@mantine/core";
import { FileTemplateFormProps, FileTemplateTextProps } from "cognita-sdk";

export function TestDocumentForm(
  props: FileTemplateFormProps<{ field: string }>
) {
  return (
    <TextInput
      value={props.value.field}
      onChange={(event) => props.onChange({ field: event.target.value })}
      label="Test Field"
    />
  );
}

export function TestDocumentText(
  props: FileTemplateTextProps<{ field: string }>
) {
  return <Text>Content: {props.data.field}</Text>;
}
