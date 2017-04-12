import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';

const FormPage = () => {

  const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
    <PageBase title="通知作成フォーム"
              navigation="Application / Form Page">
      <form>

        <TextField
          hintText="タイトルを入力（○文字以内推奨）"
          floatingLabelText="タイトル"
          fullWidth={true}
        />

        <SelectField
          floatingLabelText="対象ユーザー"
          value=""
          fullWidth={true}>
          <MenuItem key={0} primaryText="グループA"/>
          <MenuItem key={1} primaryText="グループB"/>
          <MenuItem key={2} primaryText="グループC"/>
        </SelectField>

        <DatePicker
          hintText="配信日"
          floatingLabelText="配信日"
          okLabel="OK"
          cancelLabel="キャンセル"
          locale="ja"
          fullWidth={true}/>

        <div style={styles.toggleDiv}>
          <Toggle
            label="音を鳴らす"
            labelStyle={styles.toggleLabel}
          />
        </div>

        <Divider/>

        <div style={styles.buttons}>
          <Link to="/">
            <RaisedButton label="リセット"/>
          </Link>

          <RaisedButton label="保存"
                        style={styles.saveButton}
                        type="submit"
                        primary={true}/>
        </div>
      </form>
    </PageBase>
  );
};

export default FormPage;
