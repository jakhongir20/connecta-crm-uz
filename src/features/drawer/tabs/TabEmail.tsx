import { DownOutlined } from '@ant-design/icons';
import { AutoComplete, Button, Input, Select, Space } from 'antd';

const { Option } = Select;

function TabEmail() {
  // You might load these options from a database or state management
  const templateOptions = ['Template 1', 'Template 2', 'Template 3'];
  const fieldOptions = ['Field 1', 'Field 2', 'Field 3'];

  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input addonBefore="From:" defaultValue="brian@matelogistics.com" />
        <AutoComplete
          options={[{ value: 'John Smith (johnsmith@gmail.com)' }]}
          placeholder="To:"
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
        <AutoComplete
          options={[{ value: 'Jacob Sd (jacobsd@gmail.com)' }]}
          placeholder="Cc:"
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
        <AutoComplete
          options={[{ value: 'Adam Smith (adamsmith2@gmail.com)' }]}
          placeholder="Bcc:"
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
        <Input placeholder="Subject" />
        <Space>
          <Select
            placeholder="Choose from template"
            style={{ width: 180 }}
            suffixIcon={<DownOutlined />}
          >
            {templateOptions.map((template) => (
              <Option key={template} value={template}>
                {template}
              </Option>
            ))}
          </Select>
          <Select
            placeholder="Insert a field"
            style={{ width: 180 }}
            suffixIcon={<DownOutlined />}
          >
            {fieldOptions.map((field) => (
              <Option key={field} value={field}>
                {field}
              </Option>
            ))}
          </Select>
        </Space>
        {/* Add other form components like body textarea here */}
        <Button type="primary">Send Email</Button>
      </Space>
    </div>
  );
}

export default TabEmail;
