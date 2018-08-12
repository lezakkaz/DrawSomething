# How to use

    $ git clone https://github.com/lezakkaz/DrawSomething.git
    $ cd DrawSomething/examples/RNN_Tutorial/
    $ mkdir rnn_tutorial_dataset
    $ mkdir rnn_tutorial_data
    $ gsutil -m cp "gs://quickdraw_dataset/full/simplified/*" rnn_tutorial_dataset

##

## create_dataset.py

### Mac or Linux

    $ python3 create_dataset.py --ndjson_path rnn_tutorial_dataset \
      --output_path rnn_tutorial_data
    
### Windows

    $ python create_dataset.py --ndjson_path rnn_tutorial_dataset \
      --output_path rnn_tutorial_data
